src/features/auth/screens/login-screen.tsx(107,19): error TS2769: No overload matches this call.
  Overload 1 of 2, '(props: TextInputProps): TextInput', gave the following error.
    Type '(ref: TextInput | null) => TextInput | null' is not assignable to type 'Ref<TextInput> | undefined'.
      Type '(ref: TextInput | null) => TextInput | null' is not assignable to type '(instance: TextInput | null) => void | (() => VoidOrUndefinedOnly)'.
        Type 'TextInput | null' is not assignable to type 'void | (() => VoidOrUndefinedOnly)'.
          Type 'null' is not assignable to type 'void | (() => VoidOrUndefinedOnly)'.
  Overload 2 of 2, '(props: TextInputProps, context: any): TextInput', gave the following error.
    Type '(ref: TextInput | null) => TextInput | null' is not assignable to type 'Ref<TextInput> | undefined'.
      Type '(ref: TextInput | null) => TextInput | null' is not assignable to type '(instance: TextInput | null) => void | (() => VoidOrUndefinedOnly)'.
        Type 'TextInput | null' is not assignable to type 'void | (() => VoidOrUndefinedOnly)'.
          Type 'null' is not assignable to type 'void | (() => VoidOrUndefinedOnly)'.
