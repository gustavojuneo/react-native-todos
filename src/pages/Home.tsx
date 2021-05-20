import React, { useState } from 'react'
import { Header } from '../components/Header'
import { MyTasksList } from '../components/MyTasksList'
import { TodoInput } from '../components/TodoInput'

interface Task {
  id: number
  title: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks(oldState => [...oldState, data])
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    })
    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const filteredTask = tasks.filter(task => task.id !== id)
    setTasks(filteredTask)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
