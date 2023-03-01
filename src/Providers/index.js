import { ImageProvider } from "./PostImage"

export const Providers = ({children}) => {
    return(
        <ImageProvider>
            {children}
        </ImageProvider>
    )
}