
export const   getSubject = async  () =>{
    try {

        const res = await fetch(`${process.env.BACKEND_URL}/subject`)
        const data = await res.json()
        return data
        
      } catch (error) {
        console.error("Get Subject Error:", error);
        // return { success: false, message: error.message };
      }
}

export const   createSubject = async  () =>{
    try {

        const res = await fetch(`http://localhost:5000/api/subject`)
        const data = await res.json()
        return data
        
      } catch (error) {
        console.error("Get Subject Error:", error);
        // return { success: false, message: error.message };
      }
}