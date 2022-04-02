import React from "react"
const log = console.log.bind(this)

const ENTER = 13

const random = () => Math.random().toString(36).substr(7)

const isEnterKeyPressed = (e) => e.keyCode === ENTER

const addTag = (tags, item) => tags.concat(item)
const deleteTag = (tags, item) => tags.filter(tag => tag !== item)

class CloseIcon extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 174.239 174.239">
        <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305   c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z"/>
        <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0   s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188   c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188   c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z"/>
      </svg>
    )
  }
}

class TagIcon extends React.Component {
  render() {
    return (
      <svg className='tag-icon' viewBox="0 0 512 512">
        <path d="m121.5,64.2c-31.7,0-57.3,25.7-57.3,57.3 0,31.7 25.7,57.3 57.3,57.3 31.7,0 57.3-25.7 57.3-57.3 0.1-31.7-25.6-57.3-57.3-57.3zm0,94.3c-20.4,0-37-16.6-37-37s16.6-37 37-37c20.4,0 37,16.6 37,37s-16.5,37-37,37z"/>
        <path d="m244.5,29.8c-10.4-11.5-25-17.7-40.7-17.7l-107.3-1.1c-22.9,0-44.8,8.3-60.5,25-16.7,15.7-25,37.6-25,60.5l1,107.4c1,14.6 6.3,29.2 17.7,40.7l256.5,256.4 214.8-214.8-256.5-256.4zm40.7,442l-241.9-241.9c-7.3-7.3-11.5-16.7-11.5-27.1l-1-106.3c0-16.7 7.3-33.4 18.8-45.9 12.5-12.5 29.2-19.8 46.9-19.8l106.3,1c10.4,0 19.8,4.2 27.1,11.5l241.9,241.9-186.6,186.6z"/>
      </svg>
    )
  }
}

class Tags extends React.Component {
  
  constructor() {
    super()
    this.state = {
      value: '',
      tags: ['hey', 'ho']
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  componentDidUpdate() {
    log(this.state)
  }
  handleChange(e) {
    const { value } = e.target
    this.setState({ value })
  }
  handleKeyDown(e) {
    if (isEnterKeyPressed(e)) {
      const { value, tags } = this.state
      const newTags = addTag(tags, value)

      this.setState({ value: '', tags: newTags })
    }
  }
  handleRemove(tag) {
    const { tags } = this.state
    const newTags = deleteTag(tags, tag)
    this.setState({ tags: newTags })
  }
  render() {
    const { value, tags, alert } = this.state
    return (
    
      <div className='container'>
        <TagIcon />
        <input 
          autoFocus
          type='text'
          placeholder='Add tags'
          value={value}
          onKeyDown={this.handleKeyDown} 
          onChange={this.handleChange} />

        <div className='tags'>
        { tags.map(tag => (
          <p 
            key={random()}
            className='tag'
            onClick={() => this.handleRemove(tag)}>{tag} <CloseIcon /></p>
        )) }
        </div>
      </div>

    )
  }
}
export default Tags