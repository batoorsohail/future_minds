const CreateBlogPage = () => {
  return (
    <section>
      <form>
        <label>Blog title</label>
        <input type="text" className="input"/>
        <label>Image link</label>
        <input type="text" className="input"/>
        <label>Blog content</label>
        <input type="textarea" className="input input-textarea"/>
      </form>
    </section>
  )
}

export default CreateBlogPage