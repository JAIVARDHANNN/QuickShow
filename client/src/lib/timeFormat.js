const timeFormat = (min)=>{
    const hours = Math.floor(min / 60);
    const minrem = min%60;
    return `${hours}h ${minrem}m`
}

export default timeFormat;