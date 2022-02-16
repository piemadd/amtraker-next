const openNav = (() => {
    document.getElementById("drawer").classList.toggle("drawerUp");
    console.log('opened drawer')
})

const closeNav = (() => {
    document.getElementById("drawer").classList.toggle("drawerUp");
    console.log('closed drawer')
})

const fetchRetry = ((url, delay, tries, fetchOptions = {}) => {
    function onError(err){
        triesLeft = tries - 1;
        if(!triesLeft){
            throw err;
        }
        return wait(delay).then(() => fetchRetry(url, delay, triesLeft, fetchOptions));
    }
    return fetch(url,fetchOptions).catch(onError);
})

const delay = ms => new Promise(res => setTimeout(res, ms));

export { openNav, closeNav };