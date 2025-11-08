
const Link = ({
        texto, 
        referencia,
        tamanhoFonte,
        pesoFonte,
        caixaFonte,
        espacamento,
        sobreFonte,
        transicao
    }) => {

        const style = `
            ${tamanhoFonte}
            ${pesoFonte}
            ${caixaFonte}
            ${espacamento}
            ${sobreFonte}
            ${transicao}
        `;

    return <a className={style} href={referencia}>{texto}</a>;
};

export default Link;