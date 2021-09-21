import { readable } from "svelte/store";

export const gallery1 = readable(null, function start(set) {
    
    const data = [
        {
            image: 'hondo.jpg',
            title: 'Hondo chair',
            description: 'A really nice chair'
        },
        {
            image: 'kith-hoodie.jpg',
            title: 'Kith hoodie',
            description: 'The most modern hoodie'
        },
        {
            image: 'naked-and-famous-denim.jpg',
            title: 'Nake and famous denim',
            description: 'Confortable denims for u'
        },
        {
            image: 'nudie-belt.jpg',
            title: 'Nudie belt',
            description: 'Sophisticated belt to look younger'
        },
        {
            image: 'patagonia-black-hole.jpg',
            title: 'Patagonia black hole',
            description: 'A Powerful backpack for your adeventures'
        },
        {
            image: 'rimowa.png',
            title: 'Rimowa',
            description: 'Feel confortable with the best suitcase'
        },
        {
            image: 'TNF-Fanorak.png',
            title: 'TNF-Fanorak',
            description: 'Never fear the weather again'
        },
        {
            image: 'ultra-boost.jpg',
            title: 'Ultra boost',
            description: 'They boost your running'
        },
        {
            image: 'vapormax.jpg',
            title: 'Vapormax',
            description: 'Just float feeling free'
        }
    
    ];
    set(data);
});

export const gallery2 = readable(null, function start(set) {
    const data =  [
        {
            image: '270-camo-sunset.jpg',
            title: '270 Camo Sunset',
            description:'The most confortable shoes you have ever dreamed'
        },
        {
            image: 'canada-goose.jpg',
            title: 'Canada Goose',
            description:'You will never be cold again'
        },
        {
            image: 'coral-yeti.jpg',
            title: 'Coral Yeti',
            description:'Enjoy the cold in the hot'
        },
        {
            image: 'hondo.jpg',
            title: 'Hondo chair',
            description:'A really nice chair'
        },
        {
            image: 'kith-hoodie.jpg',
            title: 'Kith hoodie',
            description:'The most modern hoodie'
        },
        {
            image: 'naked-and-famous-denim.jpg',
            title: 'Nake and famous denim',
            description:'Confortable denims for u'
        },
        {
            image: 'nudie-belt.jpg',
            title: 'Nudie belt',
            description:'Sophisticated belt to look younger'
        },
        {
            image: 'patagonia-black-hole.jpg',
            title: 'Patagonia black hole',
            description:'A Powerful backpack for your adeventures'
        },
        {
            image: 'rimowa.png',
            title: 'Rimowa',
            description:'Feel confortable with the best suitcase'
        }
    ];
    set(data);
})
   


