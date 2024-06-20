import './todoList.scss';

export default function TodoList({ todos, handleDelete, handleCheckbox }) {
  const makeMark = complete => {
    let markClass = ['todoList__item'];
    if (complete) {
      markClass.push('todoList__item--on');
    }
    return markClass.join(' ');
  };

  return (
    <>
      <div className="todoList__container">
        <section className="todoList">
          <ul className="todoList__list">
            {todos.map(({ complete, id, task, message }) => (
              <li key={id} className={makeMark(complete)}>
                <div className="todoList__itemSection">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckbox(id)}
                    checked={complete}
                    className="todoList__checkbox"
                  />

                  <p className="todoList__text">{task}</p>
                  <p className="todoList__text">{message}</p>
                </div>

                <button
                  type="button"
                  className="todoList__button"
                  onClick={() => handleDelete(id)}
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
