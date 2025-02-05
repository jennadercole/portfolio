export default function ContactForm() {
    return <>
    <div>
        <form>
            <label>Name: </label>
            <input type="text" placeholder="Name"/>
            <label>Message: </label>
            <input type="text" placeholder="What can we make?" />
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
}