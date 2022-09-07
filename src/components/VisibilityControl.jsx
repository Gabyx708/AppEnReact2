export function VisibilityControl({setshowCompleted,cleanTask, isChecked}) {

   const handleDelete = ()=>{
        if(window.confirm('vas a borrar todo?')){
            cleanTask();
        }
    }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 rounded mb-3">
      <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        checked={isChecked}
        onChange={(e) => setshowCompleted(e.target.checked)}
      />{''}
      <label>ver las cosas que hice</label>
      </div>

      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Limpiar tareas 
      </button>
    </div>
  );
}
