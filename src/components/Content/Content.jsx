import Todo from '../../assets/todo.svg'
import './content.styles.css'

const Content = (props) => {
    return (
        <>
            <h2 className='subtitle'>{props.children}</h2>
            <section className='section-card'>
                <div className='card'>
                    <p className='card-text'>Defina o melhor horário de estudo</p>
                </div>
                <div className='card'>
                    <p className='card-text'>Escolha o melhor local para estudar</p>
                </div>
                <div className='card'>
                    <p className='card-text'>Crie o seu planejamento com To Do List</p>
                </div>
                <div className='card'>
                    <p className='card-text'>Nada de distrações!</p>
                </div>
                <div className='card'>
                    <p className='card-text'>Separe um tempo para descansar</p>
                </div>
            </section>
            <div className='to-do'> 
            <div>
                <h3 className='to-do-title'>Vantagens de usar uma TO DO LIST</h3>
                <p className='to-do-text'>To-Do Lists são listas de todas as tarefas que você precisa realizar, ou seja, elas listam tudo que você tem a fazer, com as tarefas mais importantes no topo, e as tarefas menos importantes na parte inferior da lista.</p>
                <p className='to-do-text'>Ao manter um To-Do List, você se certifica de que suas tarefas estão todas em um só lugar e assim você não se esquecerá de nada importante. E ao priorizar tarefas, você planeja a ordem em que vai fazê-las, de modo que poderá dizer o que precisará de sua atenção imediata e o que você poderá deixar para depois.</p>
            </div>
                <img className='to-do-img' src={Todo} alt="ilustraçao to do list" />
            </div>
        </>
    )
}
export default Content