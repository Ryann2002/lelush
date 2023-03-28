function Title({children}) {
    return ( <div className="relative inline-block">
    <h2 className="font-playfair font-bold text-title whitespace-nowrap">
        {children}
    </h2>
    <span className="w-[75%] bg-black h-[1px] absolute bottom-0 left-[50%] -translate-x-[50%]"/>
</div> );
}

export default Title  ;