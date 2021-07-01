const title = "about us";

// create copy of links and remove about link
const links = [...commonLinks];
links.splice(4, 1); 

const content = [
    {            
        title: 'about us',
        content: '<img src="./assets/images/aboutus.png" alt="About Us"></img><p>We are a team of retro enthusiasts wishing to introduce our love of music cassette to a wider audience and looking to get more people involved in the current cassette boom. </p>' 
    },
    {
        title: 'contact us',
        content: `
        <table>
            <tr>
                <td><b>Tel:</b></td>
                <td>1234-5678</td>
            </tr>
            <tr>
                <td><b>Address:</b></td>
                <td>Abc City, Def Street, Unit 123, 456789</td>
            </tr>
            <tr>
                <td><b>Email:</b></td>
                <td><a href="mailto:hakurei.anna@gmail.com">hakurei.anna@gmail.com</a></td>
            </tr>
        </table>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6494.932509225443!2d139.6742402611077!3d35.517473977976714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjp!4v1614668438595!5m2!1sen!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `
    }
];