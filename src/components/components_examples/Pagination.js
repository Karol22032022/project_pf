import React from "react";


function Blog(props) {

    const content = props.posts.map((post) =>    <div key={post.id}>      <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>

            {content}    </div>
    );
}

const posts = [
    {id: 1,  title:'ELOOOO!', content: 'Witamy uczących się Reacta!'},
    {id: 2, title: 'Instalacja', content: 'Możesz zainstalować Reacta używając npm.'},
    {id: 3, title: 'Insta4444', content: 'Możesz zainstalować Reacta używając npm.'},
    {id: 4, title: 'Instalac555555ja', content: 'Możesz zainstalować Reacta używając npm.'}
];

export function XYZ(){
    return(
        <>
            <Blog posts={posts} />

        </>


    )

}
