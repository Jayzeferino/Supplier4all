export function validateString(string: string): boolean {
    if(string == null || string == ''){
        return false
    }
    return true
}


export function validateCategory(category: string): boolean {
    if(category  || category == ''){
        return false
    }
    return true
}

