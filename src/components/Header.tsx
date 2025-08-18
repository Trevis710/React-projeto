type Props = {
    title: string;
}


function Header(props: Props) {
    return(
        <>
            {
                props.title
            }
        </>
    )
}

export default Header;