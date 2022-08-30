// Here I pick manually all the native html attributes that I wanna do smthg with
type MyExampleComponentPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'title' | 'onClick' | 'children'
>;

// Here are all my custom props
// And I can also overwrite the types from html attribute that I want to limit
export interface MyExampleComponentCustomProps
  extends MyExampleComponentPropsHTMLAttributes {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: string;
}
