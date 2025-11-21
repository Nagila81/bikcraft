
const Link = ({
        link,
        texto,
        fontSize,
        fontWeight,
        fontCase,
        letterSpace,
        houver,
        transition 
    }) => {

        const style = `
            ${fontSize}
            ${fontWeight}
            ${fontCase}
            ${letterSpace}
            ${houver}
            ${transition}
        `;

    return (
        <>
            <a 
                className={style} 
                href={link}
            >
                {texto}
            </a>
        </>
    );
};

export default Link;