import {Container, Profile} from './styles';

export function Header(){
    return(
         
        <>
            <Container>
                <Profile>
                    <img src="https://github.com/samuelnd.png" 
                    alt="Foto do usuário " 
                    />


                    <div>
                        <span>Bem-vindo</span>
                        <strong>Samuel Nunes</strong>
                    </div>
                </Profile>
            </Container>
        </>
    )
}