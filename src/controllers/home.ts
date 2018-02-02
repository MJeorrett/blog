import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send(
        "<h1>Nine Bits in a Byte</h1>" +
        "<h3>Hi. Welcome to my blog</h3>" +
        "<h3>Articles:</h3>" +
        "<ul>" +
        "   <li><a href='/articles/1'>Hello World!</a></li>" +
        "</ul>"
    );
}