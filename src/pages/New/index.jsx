import {Link} from 'react-router-dom';

import {Container, Form} from './styles';
import {Header} from "../../components/Header";
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import {Button} from "../../components/Button";
 


export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">voltar</Link>

                    </header>

                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com"  />
                        <NoteItem isNew  placeholder="Novo Link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}