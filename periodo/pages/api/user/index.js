handler.patch(async (req, res) => {
  if (!req.user) {
    req.status(401).end();
    return;
  }
  const { name, bio } = req.body;
  await req.db.collection('users').updateOne(
    { _id: req.user._id },
    {
      $set: {
        ...(name && { name }),
        bio: bio || '',
      },
    },
  );
  res.json({ user: { name, bio } });
});
