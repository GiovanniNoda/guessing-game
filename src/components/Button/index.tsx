import { ButtonContainer } from "./styles"

type Props = React.ComponentProps<"button"> & {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return(
        <ButtonContainer type="button" {...rest}>
            {title}
        </ButtonContainer>
    )
}