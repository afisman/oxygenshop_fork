export const useScrollPercentage = () => {
    const pos = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const calcHeight = document.documentElement.clientHeight;
    const scrollValue = Math.round((pos + calcHeight)*100 / scrollHeight )

    return scrollValue
}