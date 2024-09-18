To  create a relocation request call "/card/relocatio?lassraId=yourlassraId&newLocation=yournewlocation
To create home delivery request call /card/request-delivery?lassraId=yourclassraId

 async getUserRequestHistory(user: string,pageSize: number=10,pageIndex: number=1){
    const { id } = JSON.parse(user);
    const userId = `"id":${id},`;
    try {
      const history = await this.requestRepository
        .createQueryBuilder("job_request")
        .where("job_request.clientId ILIKE :searchText", { searchText: `%${userId}%` })
        .orWhere("job_request.artisanId ILIKE :searchText", { searchText: `%${userId}%` })
        .orderBy("job_request.createdAt", "DESC") // Sort by date in descending order
        .take(pageSize) // Limit the number of results per page
        .skip((pageIndex - 1) * pageSize) // Skip the number of results for the previous pages
        .getMany();
      return history;
    } catch (err) {
      return [];
    }
  }
  @UseGuards(AuthGuard)// ****will need  guard for this endpoint
  @Get("history")
  async getrequestHistory(@Request() req) {
    const {page,size} =req.query;
    const id= JSON.stringify(req.user);
    try {
      return this.requestsService.getUserRequestHistory(id,size,page);
    } catch (err:any) {
      throw new Error(err.message);
    }
  }