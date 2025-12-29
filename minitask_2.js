

// 1
const we = {
    are : {
        the : {
            best : "Koda"
        }
    }
};

const {are: {the: {best : koda}} } = we
console.log(koda);

// 2 
const hello = {
    world : "Hello World"
}
const {world : helloWorld} = hello
console.log(helloWorld);

// 3

const obj = {
    str : [
        [],
        [],
        [],
        [
            [],
            [
                [],
                [],
                {
                    man : [
                        {
                            tech : {
                                    academy : "Tech Academy"
                            }
                        }
                    ]
                }
            ],
            []
        ]
    ]
};

const { 
    str: [
        ,,,  
        [
            ,  
            [
                ,,  
                {
                    man: [
                        {
                            tech: {
                                academy: techAcademy
                            }
                        }
                    ]
                }
            ]
        ]
    ]
} = obj;

console.log(techAcademy);

// 4
const my =[
    {
        favourite : [
            { fruit: { name : "fruit" , is : "apple"}},
            { fruit: { name : "fruit" , is : "orange"}},
            { fruit: { name : "fruit" , is : "avocado"}},
            { fruit: { name : "fruit" , is : "banana"}}
        ]
    }
]

const [{favourite: [,,,{fruit: {is: buah}}]}] = my
console.log(buah);
