import { Decorator } from '@storybook/react';
import { createRoot, Root } from 'react-dom/client';

export interface WebcompAttributes {
  [key: string]: string | undefined;
}
export const webComponent: Decorator = function (Story, context) {
  const Name = context.parameters['customElementName'] ?? 'ds-customelement';
  class WebComponent extends HTMLElement {
    mountPoint!: HTMLElement;
    props!: WebcompAttributes; // Frivillige attributes som custom-elementet kan ta imot - de oversettes til props
    root!: Root;

    connectedCallback(): void {
      this.mountReactComponent();
    }

    disconnectedCallback(): void {
      // setTimeout for å gjøre unmount async. Ellers får vi en feilmelding
      // Warning: Attempted to synchronously unmount a root while React was already rendering.
      // React cannot finish unmounting the root until the current render has completed,
      // which may lead to a race condition.
      setTimeout(() => {
        this.root.unmount();
      });
    }

    // henter custom-elementets attributer - de assigneres til props lengre ned
    get value(): WebcompAttributes {
      return Array.from(this.attributes).reduce(
        (previousValue: { [key: string]: string }, currentValue) => {
          previousValue[currentValue.name] = currentValue.value;
          return previousValue;
        },
        {}
      ) as WebcompAttributes;
    }

    // håndtering av events - disse skal sendes videre til komponentene gjennom bruk av EventForwarder wrappper
    eventDispatcher = (event: Event): void => {
      this.dispatchEvent(event);
    };

    subscribeDispatcher = (
      eventname: string,
      callback: (event: Event) => void
    ): void => {
      this.addEventListener(eventname, (e) => {
        return callback(e);
      });
    };

    mountReactComponent(): void | null {
      this.props = this.value;
      this.mountPoint = document.createElement('div');

      const shadowRoot = this.attachShadow({ mode: 'open' });

      shadowRoot.appendChild(this.mountPoint);

      if (import.meta.env.MODE === 'development') {
        for (const tag of document.head.querySelectorAll('style')) {
          const clone = tag.cloneNode(true);
          shadowRoot.appendChild(clone);
        }
      } else {
        const cssLink = document.createElement('link');
        cssLink.href = 'main.css';
        cssLink.rel = 'stylesheet';
        shadowRoot.appendChild(cssLink);
      }

      this.root = createRoot(this.mountPoint);
      this.root.render(<Story {...this.props} />);
    }
  }

  if (!window.customElements.get(Name)) {
    window.customElements.define(Name, WebComponent);
  }

  return <Name />;
};
