import { useEffect, useState } from 'react';
import './createPlayer.css';
import { usePlayerDataMutate } from '../../hooks/player/usePlayerDataMutate';
import { PlayerData } from '../../interface/PlayerData';
import { CardPlayer } from '../cardPlayer/cardPlayer';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

interface ModalProps {
    closeModal(): void;
}

export function CreatePlayer({ closeModal }: ModalProps) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [position, setPosition] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [image, setImage] = useState("");

    const { mutate, isSuccess } = usePlayerDataMutate();

    const submit = () => {
        const playerData: PlayerData = {
            name,
            number,
            position,
            birthplace,
            dateBirth,
            weight,
            height,
            image
        }

        mutate(playerData);
    }

    useEffect(() => {
        if (!isSuccess) {
            return;
        }

        closeModal();
    }, [isSuccess]);

    return (
        <div className="containerModal">
            <div className='areaModal'>
                <div className='extremeAreaModal'>
                    <h1>Cadastrar novo jogador</h1>
                </div>

                <div className='areaContentModal'>
                    <div className='cardArea'>
                        <CardPlayer
                            name={name}
                            position={position}
                            number={number}
                            image={image} />
                    </div>

                    <form className='input-container'>
                        <Input label='name' value={name} updateValue={setName} />
                        <Input label="number" value={number} updateValue={setNumber} />
                        <Input label="position" value={position} updateValue={setPosition} />
                        <Input label="birthplace" value={birthplace} updateValue={setBirthplace} />
                        <Input label="dateBirth" value={dateBirth} updateValue={setDateBirth} />
                        <Input label="weight" value={weight} updateValue={setWeight} />
                        <Input label="height" value={height} updateValue={setHeight} />
                        <Input label="image" value={image} updateValue={setImage} />
                    </form>
                </div>

                <div className='extremeAreaModal'>
                    <button onClick={submit}>Salvar</button>
                    <button onClick={closeModal}>Fechar</button>
                </div>
            </div>
        </div>
    )
}