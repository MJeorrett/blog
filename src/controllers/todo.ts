import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send(
`<a href='/'>home</a>
<h1>ToDo</h1>
<h2><i>This is a list of all my plans for this website</i></h2>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Details / Notes</th>
            <th>Date Added</th>
            <th>Date Completed</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Basic CSS</td>
            <td></td>
            <td>02-02-2018</td>
        </tr>
        <tr>
            <td>Automatic browser refreshing</td>
            <td></td>
            <td>03-02-2018</td>
        </tr>
        <tr>
            <td>Add "Article Ideas" page</td>
            <td></td>
            <td>03-02-2018</td>
        </tr>
        <tr>
            <td>Task Management System</td>
            <td></td>
            <td>04-02-2018</td>
        </tr>
    </tbody>
</table>`
    );
};