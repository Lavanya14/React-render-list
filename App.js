import React, { Component } from 'react';
class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         tasks: [
            {"id": 1, "details": "Task 1", "completed": false },
            {"id": 2, "details": "Task 2", "completed": true },
            {"id": 3, "details": "Task 3", "completed": false },
            {"id": 4, "details": "Task 4", "completed": false },
            {"id": 5, "details": "Task 5", "completed": false },
            {"id": 6, "details": "Task 6", "completed": false },
            {"id": 7, "details": "Task 7", "completed": false },
            {"id": 8, "details": "Task 8", "completed": false },
            {"id": 9, "details": "Task 9", "completed": false },
            {"id": 10, "details": "Task 10", "completed": false },
            {"id": 11, "details": "Task 11", "completed": false },
            {"id": 12, "details": "Task 12", "completed": false },
            {"id": 13, "details": "Task 13", "completed": false },
            {"id": 14, "details": "Task 14", "completed": false }
         ],
         numberOfitemsShown: 5,
      }
    }
  
    showMore(){
      if (this.state.numberOfitemsShown + 5 <= this.state.tasks.length) {
        this.setState({ numberOfitemsShown: this.state.numberOfitemsShown + 5 });
      } else {
        this.setState({ numberOfitemsShown: this.state.tasks.length })
      }
    }

    updateTask(item, event){       
       item.completed = !item.completed;
       console.log('tasks!!', this.state.tasks)
   }

   render(){
      const itemsToShow = this.state.tasks
      .slice(0, this.state.numberOfitemsShown)
      .map(item => 
      <div key={item.details}>
         <input
            type="checkbox"
            value={item.details}
            defaultChecked={item.completed}
            onChange={(event) => this.updateTask(item, event)}
         /> 
         <span key={item.details}>{item.details}</span>
      </div>
      
      );

      return (
         <div>
         <ul>
            {itemsToShow.length ? itemsToShow : "Loading..."}
         </ul>
         <button onClick={this.showMore.bind(this)}>
            Show more
         </button>
         </div>
      );
   }
}
export default App;