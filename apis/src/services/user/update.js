import User from '../../models/user'

export const byId = async (id, user) => User.findByIdAndUpdate(id, user)