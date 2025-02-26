import { InputContainer } from "./styles"

type Props = React.ComponentProps<"input">

export function Input({ ...rest }: Props) {
    return(
        <InputContainer type="text" {...rest} />
    )
}