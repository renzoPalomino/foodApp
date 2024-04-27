import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonNavLink, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import MealsDetail from './MealsDetail';

interface ContainerProps {
    category: string;
  }

const MealsName: React.FC<ContainerProps> = ({category}) => {

    const [listCategory, setListCategory] = useState([]);
    //console.log(category);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data);
            setListCategory(data.meals);})
        .catch((err) => {console.log(err.message);});
    },[category]);

    return (
        <IonGrid>
            <IonRow>
                {listCategory.map((meals)=>
                <IonCol size='6' sizeSm='6' sizeMd='3' key={meals.idMeal}>
                    <IonNavLink routerDirection='forward' component={()=><MealsDetail idMeal={meals.idMeal}/>}>
                        <IonCard key={meals.idMeal} button='true'>
                            <IonCardHeader>
                                <IonCardTitle>{meals.strMeal}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonImg src={meals.strMealThumb}/>
                                
                            </IonCardContent>
                        </IonCard>
                    </IonNavLink>
                    
                </IonCol>
                
                )}
            </IonRow>
        </IonGrid>
        
        
    );
};

export default MealsName;