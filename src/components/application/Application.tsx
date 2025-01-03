export default function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value="Wontae" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">USA</option>
            <option value="GB">Great Britain</option>
            <option value="CA">Canana</option>
            <option value="IN">India</option>
            <option value="AU">Austrailia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to terms and conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  )
}
