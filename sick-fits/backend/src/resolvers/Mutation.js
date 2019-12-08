const Mutations = {
    async createItem(parent, args, ctx, info) {
      // TODO: Check if they are logged in
  
      const item = await ctx.db.mutation.createItem(
        {
          data: {
            ...args,
          },
        },
        info //indicates what to return (: Item)
      );
  
      console.log(item);
  
      return item;
    },

    async updateItem(parent, args, ctx, info) {
      // Take copy of updated fields
      const updates = { ...args };
      // Remove id from updates
      delete updates.id;
      // Run update method;
      return ctx.db.mutation.updateItem(
        {
          data: updates,
          where: {
            id: args.id
          }
        },
        info
      );
  
      console.log(item);
  
      return item;
    },
};

module.exports = Mutations;
