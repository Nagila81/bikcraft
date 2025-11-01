
const Header = ({children}) => {

    const style = `
        bg-black
        flex
        justify-between
        items-center
        pt-[0]
        pr-25
        pb-[0]
        pl-25
        text-white
        h-[2.5rem]
    `;

    return <header className={style}>{children}</header>;
}

export default Header;