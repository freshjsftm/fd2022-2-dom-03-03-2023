function createActorCard(actor) {
  return createElement( "li",{ classNames: ["cardWrapper"] },
    createElement("article",{ classNames: ["card"] },
      createElement("div",{ classNames: ["cardImageWrapper"] },
        createElement("div",{
            classNames: ["initials"],
            styles: { backgroundColor: stringToColour(actor.name) },
          },
          actor.name[0]
        ),
        createElement("img",{
            classNames: ["cardImage"],
            attributes: { src: actor.photo, alt: actor.name, hidden: true },
            listeners: { error: handleImageError, load: handleImageLoad },
          }
        )
      ),
      createElement("h2", { classNames: ["cardName", "oneLine"] }, actor.name),
      createElement("p",{ classNames: ["cardDescription", "oneLine"] }, actor.birthdate)
    )
  );
}