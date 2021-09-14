import { readable } from "svelte/store";

export const contents = readable(null, function start(set) {
    const contentItems = [
        {
            id: 'js',
            content: 'JavaScript is great!'
        },
        {
            id: 'ruby',
            content: 'Ruby is great!'
        },
        {
            id: 'php',
            content: 'PHP is great!'
        }
    ];
    set(contentItems);
})