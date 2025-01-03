import PageHeader from "@/components/page-header";

const UserRolesPage = () => {
  return (
    <>
      <PageHeader title="User Roles" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
            <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  Nothing to see here
                </div>
                <div className="text-sm text-muted-foreground">
                  I know you are trying your best to read this and get the
                  meaning of all this text but it is advisable that you dont
                  waste your time reading it and move on to another page
                </div>
              </div>
              <div className="pb-6 px-4 pt-0"></div>
            </div>
            <div className="flex flex-col md:col-span-3">
              <div className="rounded-xl border bg-card text-card-foreground shadow md:col-span-3">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight">
                    Add More Nonsense?
                  </div>
                </div>
                <div className="p-6 pt-0">
                  {/* THis is where the data entry form is going to be */}
                  {/* <TeacherEntryForm /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRolesPage;
