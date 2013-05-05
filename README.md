# Commencer avec PhoneGap


## Installation du SDK Android 

1. Telecharger le SDK Android sur [le portail developpeurs](http://developer.android.com/sdk/index.html#download).
2. Extraire les fichiers
3. Ouvrir "Eclipse" qui se trouve dans le repertoire "eclipse".



## Installation et configuration PhoneGap

### Installation

1. Telecharger [PhoneGap](http://phonegap.com/)
2. Extraire les fichiers

### Configuration

#### Configuration de la variable PATH:

Pour  Windows:

* Dans le bureau, clic droit sur "Ordinateur (ou Poste de Travail) et cliquez sur "Proporietes".
* Cliquez sur "Avance" sur la colonne a gauche
* Sur la fenetre "Proprietes Systeme" cliquez sur le bouton "Variables d'environnement"
* Selectionnez la variables PATH depuis la section "Variables systeme"
* Cliquez sur le bouton "Modifier"
* Vous allez ensuite devoir mettre les chemins vers "platform-tools" and "tools" situes dans le repertoire SDK Android, Dans mon exemple je vais utiliser le repertoire "C:\Development\android-sdk-windows" comme repertoire de la SDK. Ajoutez la ligne suivante:

> ;C:\Development\android-sdk-windows\platform-tools;C:\Development\android-sdk-windows\tools

* Enregistrez et quittez.
* Optionnellement, vous pouvez avoir besoin d'inclure %JAVA_HOME%\bin a votre PATH aussi. Pour verifier si vous avez besoin de cela, ouvrez l'invite commandes et tapez "java". Si le programme est introuvable ajoutez %JAVA_HOME%\bin au PATH. Vous aurez probablement avoir besoin d'inclure la chemin complet au lieu de %JAVA_HOME%.
* En fin, vous pouvez avoir besoin d'inclure %ANT_HOME%\bin au PATH aussi. Pour verifier si cela est requis, ouvrez l'invite commandes et tapez "ant". Si le programme est introuvable ajoutez %ANT_HOME%\bin au PATH. Vous aurez probablement avoir besoin d'inclure la chemin complet au lieu de %ANT_HOME%.


Pour Mac OS:

* Ouvrez l'application Terminal (elle se trouve sous /Applications/Utilisies par defaut)
* Executez la commande suivante, cela va ouvrir ce fichier dans votre editeur de texte favoris

> touch ~/.bash_profile; open ~/.bash_profile

* Vous allez ensuite devoir mettre les chemins vers "platform-tools" and "tools" situes dans le repertoire SDK Android, Dans mon exemple je vais utiliser le repertoire "/Development/android-sdk-macosx" comme repertoire de la SDK. Ajoutez la ligne suivante:

> export PATH=${PATH}:/Development/android-sdk-macosx/platform-tools:/Development/android-sdk-macosx/tools

* Sauvegardez le fichier et quittez l'editeur.
* Executez votre ".bash_profile" pour mettre a jour votre PATH.

> source ~/.bash_profile

* Maintenant, a chaque fois que vous ouvrez le Terminal votre PATH sera mis a jour avec le chemin vers le SDK.


#### Creation d'un nouveau projet

* Dans une fenetre Terminal (ou invite commandes pour Windows), naviguez vers le repertoire `lib/android/bin` dans votre dossier "PhoneGap".
* Tapez `./create <project_folder_path> <package_name> <project_name>` et appuiez sur **Entrer**.

> **project_folder_path** est le chemin vers votre projet

> **package_name** est le nom du package, exemple. *com.YourCompany.YourAppName*

> **project_name** est le nom de votre projet, e.g. YourApp (ne doit pas avoir des espaces ou des tirets)

* Ouvrez *Eclipse* et dans le menu choisissez *Nouveau Projet*
* Dans le fenete qui apparait selectionnez *Android Project from Existing Code*
* Selectionnez le repertoire que vous avez mis pour `<project_folder_path>`
* Cliquez sur *Finish*



## Ressources et documentation

* [PhoneGap](http://phonegap.com)
* [Android](http://developer.android.com)
* [jQuery](http://jquery.com)
* [jQuery Mobile](http://jquerymobile.com)
* [Twitter Bootstrap](http://getbootstrap.com)

