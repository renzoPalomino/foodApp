import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import MealsName from '../components/MealsName';
import { filter, personCircle, search } from 'ionicons/icons';

const Tab1contenido: React.FC = () => {

    const [fcat, setFcat] = useState([]);
    const [activeSegment, setActiveSegment] = useState('Beef');

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then((response) => response.json())
        .then((data)=>{
            //console.log(data);
            setFcat(data.meals);})
        .catch((err) => {console.log(err.message);});
    },[]);

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                <IonButtons slot="secondary">
                <IonButton>
                    <IonIcon slot="icon-only" icon={search}></IonIcon>
                </IonButton>
                <IonButton>
                    <IonIcon slot="icon-only" icon={filter}></IonIcon>
                </IonButton>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonSegment scrollable value={activeSegment} onIonChange={(e) => setActiveSegment(e.detail.value!)}>
                {fcat.map((categoria)=>
                    
                        <IonSegmentButton key={categoria.strCategory} value={categoria.strCategory}>
                            <IonLabel>{categoria.strCategory}</IonLabel>
                        </IonSegmentButton>
                    
                )}
                </IonSegment>
                <MealsName category={activeSegment}/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1contenido;