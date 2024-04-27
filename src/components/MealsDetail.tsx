import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';

interface ContainerProps{
    idMeal: string;
}
const MealsDetail: React.FC<ContainerProps> = ({idMeal}) => {

    const [detalle, setDetalle] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+idMeal)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setDetalle(data.meals);})
        .catch((err) => {console.log(err.message);});
    },[idMeal]);

    return (
        
            detalle.map((det)=>
            <IonPage>
            <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton defaultHref='/'/>
                            </IonButtons>
                            <IonTitle>{det.strMeal}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
            <IonContent className="ion-padding">
                <IonImg src={det.strMealThumb} />
                <IonText>
                    <h2>Instrucciones:</h2>
                    <p>{det.strInstructions}</p>

                    <h2>Youtube:</h2>
                    <a href={det.strYoutube}>{det.strYoutube}</a>
                </IonText>
            </IonContent>
            </IonPage>     
            )
            
        
    );
};

export default MealsDetail;