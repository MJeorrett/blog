import { Request, Response } from 'express';

export let index = (req: Request, res: Response) => {
    res.send(
        "<h1>Hello world!</h1>" +
        "<h2><i>Welcome to 'Nine Bits in a Byte'</i></h2>" +
        "<p>Hi, I'm Matthew and this is my blog called <b>Nine Bits in a Byte</b> (I'll explain why in a future article).</p>" +
        "<p>I am a software developer at <a href='wallet.services'>Wallet.Services</a> where I mostly write C# and typescript for my day job. " +
        "We are developing a blockchain-as-a-service platform so I get to play with blockchains sometimes which is <b>awesome!</b></p>" +

        "<p>I have started this blog as a channel for exploring different things from my day to day work.  Most of what I am paid for is " +
        "coding in <a href='https://en.wikipedia.org/wiki/High-level_programming_language'>high level languages</a> and so here I want to explore " +
        "lower level stuff; I want to get <b>close to the metal</b>!</p>" +

        "<p>This page is quite basic (as you may have noticed!).  I have started with as simple a setup " +
        "as possible; a <a href='https://nodejs.org/en/'>node</a> back end running an <a href='https://expressjs.com/'>express</a> server " +
        " and no framework or templating. " +
        "My plan is to build up this site and get back to the basics of front end development with the " +
        "aim of getting a deeper understanding of what is going on.<p>" +

        "<p>I'm going to find a way to directly link the source code of this site with the content so that this blog is about the " +
        "development of the blog: <b>inception!</b>.</p>" +

        "<p>Bye for now, I'm off to see if I can serve up the source of this website to get this inception idea rolling. Before I leave " +
        "though, I have heard that people are much more likely to read blogs that have pictures, so I have added one below for you...</p>" +
        "<img src='/mac_classic.jpg' />"
    );
}