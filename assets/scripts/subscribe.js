const title = "subscribe";

// create copy of links and remove subscribe link
const links = [...commonLinks];
links.splice(3, 1);

const content = [
    {
        title: 'subscribe to us today!',
        content: '<p>Subscribe to us today to avoid missing up on the latest issues! Apart from email notification on upcoming issues, you will receive exclusive news on events and sales information!</p>',
    },
    {
        title: 'subscription form',
        content: `
        <table>
            <tr>
                <td><b>Name:</b></td>
                <td><input type="text" placeholder="Name"></input"></td>
            </tr>
            <tr>
                <td><b>Email:</b></td>
                <td><input type="text" placeholder="Email Address"></input"></td>
            </tr>
            <tr>
                <td></td>
                <td id="subscribeCell"><input type="button" value="Subsribe"></input></td>
            </tr>
        </table>
        `
    }
];