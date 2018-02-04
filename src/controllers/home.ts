import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send(
        "<h1 style='text-align:center; color:dodgerblue'>NINE BITS IN A BYTE</h1>" +
        "<h2>Hi. Welcome to my blog</h2>" +
        "<h3>Articles:</h3>" +
        "<ul>" +
        "   <li><a href='/articles/1'>Hello World!</a></li>" +
        "   <li><a href='/articles/2'>mkdir new_project</a></li>" +
        "</ul>" +
        "<h3><a href='/todo'>ToDo</a>"
    );
}