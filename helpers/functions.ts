import { SetStateAction } from "react"

export const firstLetterUppercase = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeLastLetter = (s: string) => {
    if (s.charAt(s.length - 1) == 's') {
        if (s.charAt(s.length - 2) == 'e') {
            return s.substring(0, s.length - 2)
        }
        return s.substring(0, s.length - 1)
    } else {
        return s;
    }
}

export const mapObject = <T>(obj: T[]): string[] => {
    if (obj) {
        let objectKeys = Object.keys(obj);
        if (objectKeys[0].substring(0,2) == "id") {
            objectKeys.splice(0, 1) 
        }
        return objectKeys
    }
    return []
}

export const setDimensions = (data: any) => {
    if (data.length <= 2) {
        return 'md:h-[250px] md:w-[500px]'
      } else if (data.length >= 3 && data.length <= 4) {
        return 'md:h-[430px] md:w-[600px]'
      } else if (data.length >= 5 && data.length <= 6) {
        return 'md:h-[430px] md:w-[600px]'
      } else if (data.length >= 7 && data.length <= 8) {
        return 'md:h-[430px] md:w-[600px]'
      }
}

export const mappingObjects = <T>(obj: T): SetStateAction<string[]> => {
    if (obj) {
        const uppercasedObj = Object.keys(obj).map((e) => {
            return firstLetterUppercase(e)
        })
        const filteredObj = uppercasedObj.map((e) => {
            if (e.includes('_')) {
                return e.replace(/_|#|-|@|<>/g, " ")
            // } else if (e.substring(0, 2) == "Id") {
            //     return e.substring(0, 2)
            } else {
                return e
            }
        })
        // if (filteredObj.includes("Password")) {
        //     filteredObj.splice(filteredObj.indexOf("Password"), 1) 
        // }
        return filteredObj;
    }
    return []
}

