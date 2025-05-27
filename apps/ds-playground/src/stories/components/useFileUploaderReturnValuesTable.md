| Returverdi                        | Type                       | Beskrivelse                                                      |
| --------------------------------- | -------------------------- | ---------------------------------------------------------------- |
| `fileUploaderState.uploadedFiles` | `Array<UploadedFile>`      | Liste over filer som er lastet opp                               |
| `fileUploaderState.uploadResult`  | `UploadResult ⏐ undefined` | Resultat av opplasting, inkludert statustekster og feilmeldinger |
| `fileUploaderState.isUploading`   | `boolean`                  | Om opplasting pågår                                              |
| `setSuccess`                      | `Function`                 | Funksjon for å indikere vellyket opplasting                      |
| `setLoading`                      | `Function`                 | Funksjon for å indikere at opplasting pågår                      |
| `setFailure`                      | `Function`                 | Funksjon for å indikere feil under opplasting                    |
| `remove`                          | `Function`                 | Funksjon for å fjerne en fil fra listen over opplastede filer    |
