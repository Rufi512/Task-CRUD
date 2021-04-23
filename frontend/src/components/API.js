import axios from 'axios'

export const getList = async () =>{
  const res = await axios.get('/api/tasks/list').catch((err)=>{return err.response})
  if(res.status >= 500){
    return {message:'Failed to connect to server'}
  }

  return res
}

export const create = async (task) =>{
  const res = await axios.post('/api/tasks/create',task).catch((err)=>{return err.response})
  if(res.status >= 500){
    return {message:'Failed to connect to server'}
  }

  return res
}

export const modify = async (id,task) =>{
  const res = await axios.put('/api/tasks/modify/'+id,task).catch((err)=>{return err.response})
  if(res.status >= 500){
    return {message:'Failed to connect to server'}
  }

  return res
}

export const deleteTask = async (id) =>{
  const res = await axios.delete('/api/tasks/delete/'+id).catch((err)=>{return err.response})
  if(res.status >= 500){
    return {message:'Failed to connect to server'}
  }

  return res
}
