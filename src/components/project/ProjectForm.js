import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}){
  return(
    <form className={styles.form}>
      <Input 
        type="text"
        text="Nome do projeto"
        name ="name">
        placeholder ="Inisira o nome do projeto"
      </Input>
      <Input 
        type="number"
        text="Orçamento do projeto"
        name ="budget"
      >
        placeholder ="Inisira o orçamento total"
      </Input>
      <Select 
        name="category_id" 
        text="Selecione a categoria"
      >
      </Select>
      <SubmitButton 
        text={btnText}
      >
      </SubmitButton>
    </form>
  )
}

export default ProjectForm