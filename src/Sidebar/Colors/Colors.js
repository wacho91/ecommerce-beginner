import Inputs from '../../components/Inputs';
import './Colors.css'

function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title price-title'>Colors</h2>

      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name="test"/>
          <span className='checkmark all'></span>All
      </label>

      <Inputs 
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test1'
        color='black'
      />

      <Inputs 
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='test1'
        color='blue'
      />

      <Inputs 
        handleChange={handleChange}
        value='red'
        title='red'
        name='test1'
        color='red'
      />

      <Inputs 
        handleChange={handleChange}
        value='green'
        title='Green'
        name='test1'
        color='green'
      />

      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="white" name="test1"/>
          <span className='checkmark' style={{background:"white", border: "2px solid black"}}></span> White
      </label>
    </div>
  )
}

export default Colors;