import { useState } from 'react';
import {Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import {Container, Form} from './styles';
import {Header} from "../../components/Header";
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import {Button} from "../../components/Button";

import {api} from "../../services/api";

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const navigate = useNavigate();

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTags]);
        setNewTags("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){
        await api.post("/notes",{
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");
        navigate("/");
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">voltar</Link>

                    </header>

                    <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea 
                        placeholder="Observações"
                        onChange= { e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}/>
                            ))
                        }
                        <NoteItem 
                        isNew  
                        placeholder="Novo Link"
                        value={newLink}
                        onChange= {e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                        
                    </Section>
                    <Section title="Marcadores">
                        <div className='tags'>

                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag} 
                                    onClick={() => handleRemoveTag(tag)}/>
                                    

                                ))
                            }


                            <NoteItem 
                            isNew 
                            placeholder="Nova Tag" 
                            onChange={e => setNewTags(e.target.value)}
                            value={newTags}
                            onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
            </main>
        </Container>
    )
}