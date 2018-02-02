import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send(
        "<h1>Nine Bits in a Byte</h1>" +
        "<h2>Hi. Welcome to my blog</h2>" +
        "<h3>Articles:</h3>" +
        "<ul>" +
        "   <li><a href='/articles/1'>Hello World!</a></li>" +
        "</ul>" +
        "<h3><a href='/todo'>ToDo</a>"
    );
}